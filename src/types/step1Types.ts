import { Moment } from 'moment';

export interface Step1FormValues {
  pickupAddress: string;
  scheduledDate: Moment;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  destinationAddress: string;
  department: string;
  municipality: string;
  referencePoint: string;
  instructions: string;
}
