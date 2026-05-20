// TODO: confirm with client — actual tank inventory
export type TankStatus = 'Available' | 'Leased' | 'Maintenance';

export type Tank = {
  id: string;
  terminalId: 'rotterdam' | 'fujairah' | 'houston' | 'jurong';
  capacityM3: number;
  type:
    | 'Internal Floating Roof'
    | 'External Floating Roof'
    | 'Fixed Roof'
    | 'Heated Fixed Roof'
    | 'Nitrogen-Blanketed Fixed Roof';
  compatible: Array<'Jet A1' | 'EN590' | 'D6' | 'Crude'>;
  status: TankStatus;
};

export const tanks: Tank[] = [
  { id: 'T-101', terminalId: 'rotterdam', capacityM3: 25_000, type: 'Internal Floating Roof',        compatible: ['EN590', 'Jet A1'], status: 'Available'   },
  { id: 'T-102', terminalId: 'rotterdam', capacityM3: 50_000, type: 'External Floating Roof',        compatible: ['Crude'],          status: 'Leased'       },
  { id: 'T-103', terminalId: 'rotterdam', capacityM3: 80_000, type: 'Heated Fixed Roof',             compatible: ['D6'],             status: 'Available'   },
  { id: 'T-104', terminalId: 'rotterdam', capacityM3: 15_000, type: 'Nitrogen-Blanketed Fixed Roof', compatible: ['Jet A1'],         status: 'Available'   },
  { id: 'T-105', terminalId: 'rotterdam', capacityM3: 30_000, type: 'Internal Floating Roof',        compatible: ['EN590'],          status: 'Leased'       },
  { id: 'T-106', terminalId: 'rotterdam', capacityM3: 60_000, type: 'External Floating Roof',        compatible: ['Crude'],          status: 'Available'   },
  { id: 'T-107', terminalId: 'rotterdam', capacityM3: 40_000, type: 'Heated Fixed Roof',             compatible: ['D6'],             status: 'Maintenance'  },
  { id: 'T-108', terminalId: 'rotterdam', capacityM3: 20_000, type: 'Nitrogen-Blanketed Fixed Roof', compatible: ['Jet A1'],         status: 'Leased'       },
  { id: 'T-109', terminalId: 'rotterdam', capacityM3: 35_000, type: 'Internal Floating Roof',        compatible: ['EN590', 'Jet A1'], status: 'Available'  },
  { id: 'T-110', terminalId: 'rotterdam', capacityM3: 70_000, type: 'External Floating Roof',        compatible: ['Crude'],          status: 'Available'   },
  { id: 'T-111', terminalId: 'rotterdam', capacityM3: 10_000, type: 'Nitrogen-Blanketed Fixed Roof', compatible: ['Jet A1'],         status: 'Available'   },
  { id: 'T-112', terminalId: 'rotterdam', capacityM3: 55_000, type: 'Heated Fixed Roof',             compatible: ['D6'],             status: 'Leased'       },
  { id: 'T-113', terminalId: 'rotterdam', capacityM3: 45_000, type: 'Internal Floating Roof',        compatible: ['EN590'],          status: 'Available'   },
  { id: 'T-114', terminalId: 'rotterdam', capacityM3: 80_000, type: 'External Floating Roof',        compatible: ['Crude'],          status: 'Leased'       },
];
