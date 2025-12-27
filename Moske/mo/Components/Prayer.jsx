// PrayerPage.js
import PrayerTable from "./PrayerTable";

export default async function PrayerPage() {
  async function getPrayerTimes() {
    const res = await fetch(
      "https://time.my-masjid.com/api/TimingsInfoScreen/GetMasjidMultipleTimings?GuidId=232cdc75-e88c-4b73-b4d4-814d0c15b2c0",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;
    const data = await res.json();

    // API:et returnerar data.model.salahTimings som en array
    const allTimings = data.model.salahTimings;

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    // VIKTIGT: Matcha exakt små/stora bokstäver från API-responsen
    // Enligt ditt JSON-exempel heter fälten "day" och "month" (små bokstäver)
    const todaysTimings = allTimings.find(
      (item) =>
        Number(item.day) === currentDay && Number(item.month) === currentMonth
    );

    // Om vi inte hittar idag, ta första i listan som fallback
    return todaysTimings || allTimings[0];
  }

  const prayerData = await getPrayerTimes();

  if (!prayerData)
    return <div className="p-10 text-center">Kunde inte hämta tider.</div>;

  return <PrayerTable initialData={prayerData} />;
}
