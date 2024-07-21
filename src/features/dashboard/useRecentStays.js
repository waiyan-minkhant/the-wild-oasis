import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useUrl } from "../../hooks/useUrl";
import { subDays } from "date-fns";

export function useRecentStays() {
  const { readUrl } = useUrl();
  const numDays = !readUrl("last") ? 7 : Number(readUrl("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const { data: stays, isLoading } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, isLoading, confirmedStays, numDays };
}
