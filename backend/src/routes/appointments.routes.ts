import { Router } from 'express';
import { startOfHour, parseISO, isEqual} from 'date-fns'
import Appointment from '../models/Appointment'

const appointmentsRouter = Router();


const appointments: Appointment[] = [];

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));
  const findeAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
    )

    if (findeAppointmentInSameDate) {
      return res.status(400).json({ message: 'This appointment is already booked.' });
    }

  const appointment = new Appointment(provider, parsedDate)

  appointments.push(appointment);

  return res.json(appointment)
})

export default appointmentsRouter
