export interface Config {
    name: string;
    type: string | HTMLInputTypeAttribute;
    label: string;
    defaultValue: string | number | boolean;
}

export interface Brand {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    primaryColorForeground: string;
    secondaryColorForeground: string;
    primaryColorHover: string;
    secondaryColorHover: string;
    borderColor: string;
    fontSize: string;
    fontFamily: string;
    padding: string;
    borderRadius: string;
    borderRadiusBrand: string;
}

const Colors: Partial<Brand> = {
    primaryColor: "#0e66a1",
    secondaryColor: "#f4a600",
    backgroundColor: "#ffffff",
    textColor: "#0f0f0f",
} as const;

export const brand: Brand = {
    primaryColor: Colors.primaryColor,
    secondaryColor: Colors.secondaryColor,
    backgroundColor: Colors.backgroundColor,
    textColor: Colors.textColor,
    primaryColorForeground: Colors.backgroundColor,
    secondaryColorForeground: Colors.textColor,
    primaryColorHover: Colors.primaryColor,
    secondaryColorHover: Colors.secondaryColor,
    borderColor: Colors.primaryColor,
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    padding: "16px",
    borderRadius: "16px",
    borderRadiusBrand: "0 16px",
}