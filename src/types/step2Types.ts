// src/types/step2Types.ts

export interface BulkyItem {
  length: number; // Largo
  height: number; // Alto
  width: number; // Ancho
  weight: number; // Peso en libras
  content: string; // Contenido
}

export interface Step2FormValues {
  items: BulkyItem[];
}
