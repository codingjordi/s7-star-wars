export interface Starship {
    name: string; // Nombre de la nave espacial.
    model: string; // Modelo de la nave.
    manufacturer: string; // Fabricante de la nave.
    cost_in_credits: string; // Costo en créditos de la nave.
    length: string; // Longitud de la nave en metros.
    max_atmosphering_speed: string; // Velocidad máxima atmosférica de la nave en km/h.
    crew: string; // Número de tripulantes de la nave.
    passengers: string; // Número de pasajeros que puede llevar la nave.
    cargo_capacity: string; // Capacidad de carga de la nave en kilogramos.
    consumables: string; // Periodo de tiempo en el que la nave puede operar sin reabastecimiento.
    hyperdrive_rating: string; // Clasificación de la nave según su rendimiento de hipervelocidad.
    MGLT: string; // MGLT (Megalight per hour) es una medida de eficiencia de combustible para naves.
    starship_class: string; // Tipo de nave (por ejemplo, "corvette", "destroyer", "fighter").
    pilots: string[]; // Lista de URLs de los pilotos que han pilotado esta nave.
    films: string[]; // Lista de películas en las que aparece esta nave.
    created: string; // Fecha en la que la nave fue creada en el sistema.
    edited: string; // Fecha de la última modificación de la nave en el sistema.
    url: string; // URL para acceder a esta nave en el sistema de la API.
  }
  