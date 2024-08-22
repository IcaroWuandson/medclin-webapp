import React, { useState, useEffect } from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { ptBR } from "date-fns/locale";
import { supabase } from "../../services/supabase";
import { Autocomplete, TextField, Box, Grid } from "@mui/material";
import { ButtonSave } from "./styles";

const formatDateForInput = (date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset);
  return localDate.toISOString().slice(0, 16);
};

const ComponentAgenda = () => {
  const [clientes, setClientes] = useState([]);
  const [procedimentos, setProcedimentos] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          clientesResponse,
          procedimentosResponse,
          medicosResponse,
          agendamentosResponse,
        ] = await Promise.all([
          supabase.from("clientes").select("id, nome"),
          supabase
            .from("procedimentos")
            .select("id, nome, valor, valorConvenio"),
          supabase.from("medicos").select("id, nomeCompleto"),
          supabase.from("agendamentos").select("*"),
        ]);

        if (clientesResponse.error) {
          console.error("Erro ao buscar clientes:", clientesResponse.error);
          return;
        }

        if (procedimentosResponse.error) {
          console.error(
            "Erro ao buscar procedimentos:",
            procedimentosResponse.error
          );
          return;
        }

        if (medicosResponse.error) {
          console.error("Erro ao buscar médicos:", medicosResponse.error);
          return;
        }

        if (agendamentosResponse.error) {
          console.error(
            "Erro ao buscar agendamentos:",
            agendamentosResponse.error
          );
          return;
        }

        setClientes(clientesResponse.data);
        setProcedimentos(procedimentosResponse.data);
        setMedicos(medicosResponse.data);

        const events = agendamentosResponse.data.map((agendamento) => ({
          id: agendamento.id,
          start: new Date(agendamento.start),
          end: new Date(agendamento.end),
          title: `Cliente: ${agendamento.cliente_nome} - Procedimento: ${agendamento.procedimento_nome} - Médico: ${agendamento.medico_nome}`,
        }));

        setEvents(events);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const getHours = (date) => {
    const day = date.getDay();
    const isFriday = day === 5;
    return {
      startHour: 7,
      endHour: isFriday ? 17 : 18,
      step: 30,
    };
  };

  const currentDate = new Date();
  const { startHour, endHour } = getHours(currentDate);

  const CustomEditor = ({ state, close }) => {
    const [localCliente, setLocalCliente] = useState(
      state.edited?.cliente || null
    );
    const [start, setStart] = useState(state.edited?.start || new Date());
    const [end, setEnd] = useState(state.edited?.end || new Date());
    const [selectedProcedimento, setSelectedProcedimento] = useState(
      state.edited?.procedimento || ""
    );
    const [selectedMedico, setSelectedMedico] = useState(
      state.edited?.medico || ""
    );

    useEffect(() => {
      if (state.edited) {
        setLocalCliente(state.edited.cliente || null);
        setStart(state.edited.start || new Date());
        setEnd(state.edited.end || new Date());
        setSelectedProcedimento(state.edited.procedimento || "");
        setSelectedMedico(state.edited.medico || "");
      }
    }, [state.edited]);

    const handleConfirm = async () => {
      const agendamento = {
        start: start.toISOString(),
        end: end.toISOString(),
        cliente_id: localCliente?.id,
        cliente_nome: localCliente?.nome,
        procedimento_id: selectedProcedimento?.id,
        procedimento_nome: selectedProcedimento?.nome,
        medico_id: selectedMedico?.id,
        medico_nome: selectedMedico?.nomeCompleto,
      };

      try {
        let response;
        if (state.edited?.id) {
          response = await supabase
            .from("agendamentos")
            .update(agendamento)
            .eq("id", state.edited.id);
        } else {
          response = await supabase.from("agendamentos").insert([agendamento]);
        }

        if (response.error) {
          console.error("Erro ao salvar agendamento:", response.error);
          return;
        }

        const newAgendamento = {
          ...state.edited,
          ...agendamento,
          id: response.data[0]?.id,
        };

        setEvents((prevEvents) => {
          if (state.edited?.id) {
            return prevEvents.map((event) =>
              event.id === state.edited.id ? newAgendamento : event
            );
          }
          return [...prevEvents, newAgendamento];
        });

        state.onConfirm(newAgendamento, state.edited?.id ? "edit" : "add");
      } catch (error) {
        console.error("Erro ao salvar agendamento:", error);
      }
      close();
    };

    const handleDelete = async () => {
      if (state.edited?.id) {
        try {
          const response = await supabase
            .from("agendamentos")
            .delete()
            .eq("id", state.edited.id);

          if (response.error) {
            console.error("Erro ao excluir agendamento:", response.error);
            return;
          }

          setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== state.edited.id)
          );

          state.onConfirm(state.edited, "delete");
          close();
        } catch (error) {
          console.error("Erro ao excluir agendamento:", error);
        }
      }
    };

    return (
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Início"
              InputLabelProps={{ shrink: true }}
              value={formatDateForInput(start)}
              onChange={(e) => setStart(new Date(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="datetime-local"
              label="Fim"
              InputLabelProps={{ shrink: true }}
              value={formatDateForInput(end)}
              onChange={(e) => setEnd(new Date(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={localCliente}
              options={clientes}
              getOptionLabel={(option) => option.nome || ""}
              onChange={(event, newValue) => setLocalCliente(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Cliente" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={selectedProcedimento}
              options={procedimentos}
              getOptionLabel={(option) => option.nome || ""}
              onChange={(event, newValue) => setSelectedProcedimento(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Procedimento"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              value={selectedMedico}
              options={medicos}
              getOptionLabel={(option) => option.nomeCompleto || ""}
              onChange={(event, newValue) => setSelectedMedico(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Médico" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
        <ButtonSave onClick={handleConfirm}>Salvar</ButtonSave>
        {state.edited?.id && (
          <ButtonSave onClick={handleDelete} color="error">
            Excluir
          </ButtonSave>
        )}
      </Box>
    );
  };

  return (
    <div style={{ width: "80vw" }}>
      <Scheduler
        view="day"
        locale={ptBR}
        week={{ startHour, endHour, step: 30 }}
        day={{ startHour, endHour, step: 10 }}
        hourFormat={24}
        translations={{
          navigation: {
            month: "Mês",
            week: "Semana",
            day: "Dia",
            today: "Hoje",
            agenda: "Agenda",
          },
          form: {
            addTitle: "Agendar",
            editTitle: "Editar",
            confirm: "Confirmar",
            delete: "Excluir",
            cancel: "Cancelar",
          },
          event: {
            start: "Início",
            end: "Fim",
            allDay: "Dia Inteiro",
          },
          validation: {
            required: "Obrigatório",
            invalidEmail: "Email Inválido",
            onlyNumbers: "Apenas Números Permitidos",
            min: "Mínimo de {{min}} letras",
            max: "Máximo de {{max}} letras",
          },
          moreEvents: "Mais...",
          noDataToDisplay: "Sem dados para exibir",
          loading: "Carregando...",
        }}
        fields={[
          {
            name: "cliente",
            type: "input",
            config: { label: "Cliente", required: true, variant: "outlined" },
          },
          {
            name: "profissional",
            type: "input",
            config: {
              label: "Profissional",
              required: true,
              variant: "outlined",
            },
          },
          {
            name: "procedimento",
            type: "input",
            config: {
              label: "Procedimento",
              required: true,
              variant: "outlined",
            },
          },
          {
            name: "medico",
            type: "input",
            config: { label: "Médico", required: true, variant: "outlined" },
          },
          {
            name: "start",
            type: "datetime",
            config: { label: "Início", required: true, variant: "outlined" },
          },
          {
            name: "end",
            type: "datetime",
            config: { label: "Fim", required: true, variant: "outlined" },
          },
        ]}
        events={events}
        customEditor={(scheduler) => <CustomEditor {...scheduler} />}
      />
    </div>
  );
};

export default ComponentAgenda;
