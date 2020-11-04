import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { startOfHour, parseISO, isEqual } from 'date-fns'

const appointmentsRouter = Router()

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointment => isEqual(parsedDate, appointment.date));

  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: "This appointment is already booked"})
  }

  const appointment = {
    id: uuidv4(),
    provider,
    date:parsedDate,
  };

  appointments.push(appointment)
  return response.json(appointment);
});

export default appointmentsRouter
