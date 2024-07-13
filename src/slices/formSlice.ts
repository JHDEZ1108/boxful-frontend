// src/slices/formSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment';
import { Step1FormValues } from '../types/step1Types';
import axios from 'axios';

// Definir el estado inicial con tipos adecuados
interface FormState {
  step1Data: Step1FormValues; 
  step2Data: any; // Añade un tipo similar si ya lo tienes para el paso 2
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

const initialState: FormState = {
  step1Data: initialStep1Data,
  step2Data: {},  // Inicializa según los requisitos
};

// Crear una acción asincrónica para enviar datos de formulario
export const submitFormData = createAsyncThunk(
  'form/submitFormData',
  async (formData: {step1Data: Step1FormValues, step2Data: any}, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://tuapi.com/api/formData', {
        step1: formData.step1Data,
        step2: formData.step2Data
      });
      return response.data;
    } catch (error: any) {
      // Asegura el tipo de error antes de intentar acceder a `.response`
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        // Manejo cuando el error no proviene de Axios
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
    setStep2Data: (state, action: PayloadAction<any>) => { // Define el tipo aquí
      state.step2Data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.fulfilled, (state, action) => {
        console.log('Data submitted successfully:', action.payload); // Acción a realizar cuando la promesa se resuelve exitosamente
      })
      .addCase(submitFormData.rejected, (state, action) => {
        console.error('Failed to submit data:', action.payload); // Acción a realizar cuando la promesa se rechaza
      });
  }
});

export const { setStep1Data, setStep2Data } = formSlice.actions;

export default formSlice.reducer;
