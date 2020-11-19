import { Router } from 'express';
import { getCustomRepository } from 'typeorm'
import { parseISO} from 'date-fns'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await appointmentsRepository.find();

  return res.json(appointments)
})

appointmentsRouter.post('/', async (req, res) => {
 try {
  const { provider, date } = req.body;

  const parsedDate = parseISO(date)

  const createAppointment = new CreateAppointmentService()

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider,

  })

    return res.json(appointment)
 } catch (error) {

    return res.status(400).json({ error: error.message })

 }
})

export default appointmentsRouter
