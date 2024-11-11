import { Starship } from "./Starship";

export interface StarshipsAPIResponse {
    count: number; // Cantidad total de naves
    next: string | null; // La siguiente página (si existe)
    previous: string | null; // La página anterior (si existe)
    results: Starship[];
  }
  