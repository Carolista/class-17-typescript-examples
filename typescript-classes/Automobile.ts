// TODO: export the Automobile class as default
class Automobile {
  
  // Type each property - do NOT use let keyword
  year: number;
  make: string;
  model: string;
  features: string[];

  constructor(year: number, make: string, model: string) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.features = [];
  }

  printDetails(vehicle: string): void {
    console.log(`This ${vehicle} is a ${this.year} ${this.make} ${this.model}.`);
  }
}

interface Features {
  paintColor: string,
  interior: string,
  misc?: string[]
}

// TODO: export the Truck class
class Truck extends Automobile implements Features {
  cabStyle: string;
  engine: string;

  // Must explicitly declare interface properties
  paintColor: string;
  interior: string;
  misc: string[];

  constructor(year: number, make: string, model: string, cabStyle: string, engine: string) {
    super(year, make, model); // inherited from parent class
    this.cabStyle = cabStyle;
    this.engine = engine;
    this.paintColor = ''; // must be assigned for the first time
    this.interior = '';
    this.misc = [];
  }

  printDetails(vehicle: string): void {
    let details = `This ${vehicle} is a ${this.year} ${this.make} ${this.model}. It has a ${this.cabStyle} cab and a ${this.engine} engine`;
    if (this.paintColor && this.interior) {
      details += ` with ${this.paintColor} paint and ${this.interior} interior.`
    } else {
      details += '.';
    }
    console.log(details);
  }
}
