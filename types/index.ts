import { MouseEventHandler } from "react";

// Button Props
export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

// Home Props
export interface HomeProps {
    searchParams: FilterProps;
}

// Search Manufacturer Props
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

// Car Details
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

// Filter Props
export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

// Dropdown Option Props
export interface OptionProps {
    title: string;
    value: string;
}

// Custom Filter Props
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

// Vehicle Details
export interface VehicleDetails {
    plateNumber: string;
    year: number;
    color: string;
    scratch: number;
    rim: number;
    element: number;
    sit: number;
    dirty: number;
    pound: number;
    rsv: number;
}

// Form Data for Contract and Rental
export interface FormData {
    renterName: string;
    renterFirstName: string;
    renterPhone: number;
    renterAddress: string;
    renterCity: string;
    renterPostalCode: number;
    renterEmail: string;
    rentalStartDate: Date; // Date type ensures proper handling of dates
    rentalEndDate: Date;
    rentalPrice: number; // Assuming numeric values for easier calculations
    deposit: number;
    kmAllowed: number;
    kmAtStart: number;
    kmExceed: number; // Assuming this is calculated or entered explicitly
    vehicleModel: string;
    vehicleDetails: VehicleDetails | {}; // Optional details
    gasAtStart: number; // 0-100 range
    paiementMethod: string; // e.g., "Credit Card", "Cash"
    paiementState: boolean;
}

// Contract Preview Props
export interface ContractPreviewProps {
    formData: FormData;
}

// Payment Details Form Props
export interface PaiementDetailsFormProps {
    formData: {
        paiementMethod: string; // e.g., "Credit Card", "Cash"
        paiementState: boolean; // True if payment is complete
    };
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Vehicle Info Form Props
export interface VehicleInfoFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
export interface RentalDetailsFormData {
    rentalStartDate: string; // ISO date string
    rentalEndDate: string; // ISO date string
    rentalPrice: number | ""; // Price in euros
    deposit: number | ""; // Deposit in euros
    kmAllowed: number | ""; // Allowed kilometers
    kmAtStart: number | ""; // Kilometers at the start
    kmExceed: number | ""; // Cost of additional kilometers
    gasAtStart: number | ""; // Percentage of gas in the tank at start
}

export interface RentalDetailsFormProps {
    formData: RentalDetailsFormData;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}