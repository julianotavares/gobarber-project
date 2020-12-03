import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12323123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12323123123');
  });

  it('should not be able to create two appointments on the same date', async () => {
    const appointmentDate = new Date(2020, 12, 30, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '12323123123',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '12323123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
