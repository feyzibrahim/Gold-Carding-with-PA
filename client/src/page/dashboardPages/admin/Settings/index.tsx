import { useState } from "react";
import { commonRequest } from "../../../../common/api";

function Index() {
  const [value, setValue] = useState("");
  const [interval, setInterval] = useState("minute");

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleIntervalChange = (event: any) => {
    setInterval(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Convert the selected interval and value to cron job time format
    let cronJobTime = "*";
    if (interval === "second") {
      cronJobTime = `*/${value} * * * * *`;
    } else if (interval === "minute") {
      cronJobTime = `*/${value} * * * *`;
    } else if (interval === "hour") {
      cronJobTime = `0 */${value} * * *`;
    } else if (interval === "day") {
      cronJobTime = `0 0 */${value} * *`;
    } else if (interval === "month") {
      cronJobTime = `0 0 1 */${value} *`;
    } else if (interval === "year") {
      cronJobTime = `0 0 1 1 */${value}`;
    }
    const res: any = await commonRequest("POST", "/update-cron", {
      interval: cronJobTime,
    });
    if (res.success) {
      // Clear the form fields
      setValue("");
      setInterval("minute"); // Reset interval to default value
      // Show success alert
      alert("Cron job interval updated successfully!");
    }
  };

  return (
    <div className="mx-5">
      <p className="text-2xl font-semibold mb-4">Change Cron Job Time</p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Interval:</label>
        <select
          value={interval}
          onChange={handleIntervalChange}
          className="border rounded-md px-2 py-1 mb-4"
        >
          <option value="second">Second</option>
          <option value="minute">Minute</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <label className="block mb-2">Value:</label>
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          className="border rounded-md px-2 py-1 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Index;
