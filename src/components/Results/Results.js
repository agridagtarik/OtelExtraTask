import React from "react";
import "./Results.css";
import DataTable from "react-data-table-component";

const Results = ({ bankValue }) => {
  console.log(bankValue);
  const renderData = () => {
    if (!bankValue || bankValue === "Tümü") {
      return data;
    } else {
      return data.filter((item) => item.bankId === bankValue);
    }
  };
  const columns = [
    {
      name: "REZ",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Tarih",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Agent",
      selector: (row) => row.agent,
      sortable: true,
    },
    {
      name: "Tesis",
      selector: (row) => row.facility,
      sortable: true,
    },
    {
      name: "Otel Ödemesi",
      selector: (row) => row.otelPayment,
      when: (row) => row.otelPayment === "Yapılmadı",
      style: {
        color: "red",
      },

      sortable: true,
    },
    {
      name: "Oda",
      selector: (row) => row.room,
      sortable: true,
    },
    {
      name: "Giriş",
      selector: (row) => row.entrance,
      sortable: true,
    },
    {
      name: "Çıkış",
      selector: (row) => row.exit,
      sortable: true,
    },
    {
      name: "Ödeme T",
      selector: (row) => row.payment,
      sortable: true,
    },
    {
      name: "Ciro",
      selector: (row) => row.giro,
      sortable: true,
    },
    {
      name: "Ödenen",
      selector: (row) => row.paid,
      sortable: true,
    },
    {
      name: "Konfirme",
      selector: (row) => row.confirmed,
      sortable: true,
    },
    {
      name: "Banka Kom.",
      selector: (row) => row.commission,
      sortable: true,
    },
    {
      name: "Banka",
      selector: (row) => row.bank,
      sortable: true,
    },
    {
      name: "Kâr",
      selector: (row) => row.profit,
      sortable: true,
    },
    {
      name: "Kârlılık",
      selector: (row) => row.profitability,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "23272",
      year: "27.02.2023",
      agent: "Satış Agent 1",
      facility: "Elite World Grand Sapanca Ho.",
      otelPayment: "Yapılmadı",
      room: "1",
      entrance: "05.03.2023",
      exit: "06.03.2023",
      payment: "₺ Sejour",
      giro: "5680",
      paid: "5680",
      confirmed: "5110.00",
      commission: "188.89",
      bank: "FİNANSBANK",
      bankId: "1",
      profit: "570",
      profitability: "% 10",
    },
    {
      id: 2,
      title: "23273",
      year: "27.02.2023",
      agent: "Satış Agent 3",
      facility: "Trendlife Hotels Uludağ",
      otelPayment: "Yapılmadı",
      room: "1",
      entrance: "02.03.2023",
      exit: "06.03.2023",
      payment: "₺ Sejour",
      giro: "25548.12",
      paid: "25548.12",
      confirmed: "21426.00",
      commission: "1446.12",
      bank: "VAKIFBANK",
      bankId: "3",
      profit: "4122.12",
      profitability: "% 16",
    },
    {
      id: 3,
      title: "23275",
      year: "27.02.2023",
      agent: "Satış Agent 1",
      facility: "Safran Thermal Resort Sandı.",
      otelPayment: "Yapılmadı",
      room: "2",
      entrance: "16.03.2023",
      exit: "18.03.2023",
      payment: "₺ Sejour",
      giro: "11536",
      paid: "11536",
      confirmed: "7209.00",
      commission: "167.12",
      bank: "FİNANSBANK",
      bankId: "1",
      profit: "4327",
      profitability: "% 38",
    },
    {
      id: 4,
      title: "23277",
      year: "27.02.2023",
      agent: "Satış Agent 2",
      facility: "Grand Kartal Hotel",
      otelPayment: "Yapılmadı",
      room: "1",
      entrance: "08.03.2023",
      exit: "11.03.2023",
      payment: "₺ Sejour",
      giro: "70000",
      paid: "70000",
      confirmed: "56950.00",
      commission: "0.00",
      bank: "ZİRAAT BANKASI",
      bankId: "2",
      profit: "13050",
      profitability: "% 19",
    },
    {
      id: 5,
      title: "23276",
      year: "27.02.2023",
      agent: "Satış Agent 1",
      facility: "Elite World Grand Sapanca Ho.",
      otelPayment: "Yapılmadı",
      room: "1",
      entrance: "01.03.2023",
      exit: "02.03.2023",
      payment: "₺ Sejour",
      giro: "6091",
      paid: "6091",
      confirmed: "0.00",
      commission: "0.00",
      bank: "ZİRAAT BANKASI",
      bankId: "2",
      profit: "6091",
      profitability: "% 100",
    },
  ];

  const customStyles = {
    rows: {
      style: {
        color: "#7e96b3",
      },
    },
    headCells: {
      style: {
        color: "#7e96b3",
      },
    },
    cells: {
      style: {
        color: "#7e96b3",
      },
    },
  };

  return (
    <div className="results">
      <div className="search">
        <h6>Arama Sonuçları</h6>
        <hr />
      </div>

      <div className="buttons d-flex align-items-top">
        <button type="button" className="btn border">
          Excel
        </button>
        <button type="button" className="btn border">
          PDF
        </button>
        <button type="button" className="btn border">
          Print
        </button>
      </div>
      <div className="table">
        <DataTable
          columns={columns}
          data={renderData()}
          customStyles={customStyles}
          responsive
        />
      </div>
    </div>
  );
};

export default Results;
