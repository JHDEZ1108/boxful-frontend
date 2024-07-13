// src/slices/formSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment';
import { Step1FormValues } from '../types/step1Types';
import { Step2FormValues } from '../types/step2Types';
import axios from 'axios';
interface FormState {
  step1Data: Step1FormValues; 
  step2Data: Step2FormValues;
}

const initialStep1Data: Step1FormValues = {
  pickupAddress: '',
  scheduledDate: moment(), 
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  destinationAddress: '',
  department: '',
  municipality: '',
  referencePoint: '',
  instructions: '',
};

const initialStep2Data: Step2FormValues = {
  items: [
    {
      length: 0,
      height: 0,
      width: 0,
      weight: 0,
      content: ""
    }
  ]
};

const initialState: FormState = {
  step1Data: initialStep1Data,
  step2Data: initialStep2Data,
};

// Creación una acción asincrónica para enviar datos del formulario
export const submitFormData = createAsyncThunk(
  'form/submitFormData',
  async (formData: {step1Data: Step1FormValues, step2Data: Step2FormValues}, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://apiboxful.com/api/formData', {
        step1: formData.step1Data,
        step2: formData.step2Data
      });
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<Step1FormValues>) => {
      state.step1Data = action.payload;
    },
    setStep2Data: (state, action: PayloadAction<Step2FormValues>) => {
      state.step2Data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.fulfilled, (state, action) => {
        console.log('Data submitted successfully:', action.payload);
      })
      .addCase(submitFormData.rejected, (state, action) => {
        console.error('Failed to submit data:', action.payload);
      });
  }
});

export const { setStep1Data, setStep2Data } = formSlice.actions;
export default formSlice.reducer;
