import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "content-type": "application/json",
    "partner-token": "bcc2490deedd4265ba63ac4fe1ef771a",
    authorization: "Basic YWNjODM5YTMtNjBkMS00YjliLWJiNjktNmY5YjI4MjdjMzEw",
  };

  const response = await fetch(
    "http://api.carmd.com/v3.0/model?year=2015&make=ACURA",
    {
      headers: headers,
    }
  );

  const result = await response.json(); 
  return result.data;
}
export async function generateCarImage(car: CarProps, angle?: string) {
  const headers = {
    "content-type": "application/json",
    "partner-token": "bcc2490deedd4265ba63ac4fe1ef771a",
    authorization: "Basic YWNjODM5YTMtNjBkMS00YjliLWJiNjktNmY5YjI4MjdjMzEw",
  };

  const response = await fetch(
    "http://api.carmd.com/v3.0/image?vin=5TFEV54198X043410",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
export const calculateCarRent = (year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
