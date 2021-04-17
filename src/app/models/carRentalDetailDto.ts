export interface CarRentalDetailDto {
  rentalId: number;
  firstName: string;
  lastName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  rentDate: Date;
  returnDate: Date;
}