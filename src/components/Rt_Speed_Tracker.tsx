import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
  } from "@/components/ui/table";
  
  const invoices = [
    {
      invoice: "INV001",
      totalAmount: "$250.00",
    },
    {
      invoice: "INV002",
      totalAmount: "$150.00",
    },
    {
      invoice: "INV003",
      totalAmount: "$350.00",
    },
    {
      invoice: "INV004",
      totalAmount: "$450.00",
    },
    {
      invoice: "INV005",
      totalAmount: "$550.00",
    },
    {
      invoice: "INV006",
      totalAmount: "$200.00",
    },
    {
      invoice: "INV007",
      totalAmount: "$300.00",
    },
  ];
  
  export function Rt_Speed_Tracker() {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold mb-4 text-center">Real Time Speed Tracker</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-center items-center mb-4 sm:mb-0 sm:mr-8">
            <img
              src="https://www.canal26.com/media/image/2021/12/14/493487.jpg"
              alt="Real time video"
              className="max-w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <Table className="">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  