import { getToday } from "../utils/dateFormat";
import supabase, { supabaseUrl } from "./supabase";

export const getBookings = async () =>{
    let { data,error } = await supabase
  .from('bookings')
  .select('id,startDate,endDate,totalPrice,status,isPaid,cabins(name),guests(fullName,email)')
  if (error) {
    throw new error("Cant load bookings");
  }
  return data
}

export const getBooking = async (id) =>{
  let { data,error } = await supabase
.from('bookings')
.select('*,cabins(*),guests(*)')
.eq('id',id)
.single()
if (error) {
  throw new error("Cant load bookings");
}
return data
}


export const updateBooking = async(id,obj)=>{
  
    const { data, error } = await supabase
      .from("bookings")
      .update(obj)
      .eq("id", id)
      .select()
      .single();
  
    if (error) {
      console.error(error);
      throw new Error("Booking could not be updated");
    }
    return data
}
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}
