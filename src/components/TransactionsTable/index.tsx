import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

interface Transcation {
  id: number;
  title: string;
  amount: number;
  createdAt: string;
  category: string;
  type: string;
}

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction: Transcation) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>

                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </td>

                  <td>{transaction.category}</td>

                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
