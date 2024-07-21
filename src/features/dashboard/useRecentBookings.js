import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useUrl } from "../../hooks/useUrl";
import { subDays } from "date-fns";

export function useRecentBookings() {
  const { readUrl } = useUrl();
  const numDays = !readUrl("last") ? 7 : Number(readUrl("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading };
}
