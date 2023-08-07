import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import { HeaderStyle, WalletMainStyle, TableStyle, FormWalletStyle } from '../styles';

function Wallet() {
  return (
    <div>
      <WalletMainStyle>
        <HeaderStyle>
          <Header />
        </HeaderStyle>
        <FormWalletStyle>
          <WalletForm />
        </FormWalletStyle>
        <TableStyle>
          <Table />
        </TableStyle>
      </WalletMainStyle>
    </div>
  );
}

export default Wallet;
