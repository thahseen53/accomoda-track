import { formatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';


export const numOfDays =(date1,date2)=>{
    const startDate = new Date(date1)
    const endDate = new Date(date2) 
    let timeDifference = endDate.getTime() - startDate.getTime()
    let daysDifference =Math.ceil( timeDifference / (1000 * 60 * 60 * 24)); 

     return daysDifference

   
}
export const getDateFormat = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  };

  export const daysRemaining = (passedDate) => {
    const startDate = new Date (passedDate)
    let todaysDate = new Date()
    let timeDifference = startDate.getTime() - todaysDate.getTime()
    let daysDifference =Math.ceil( timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference
  }

  export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));