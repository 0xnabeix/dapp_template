import Web3Modal from 'web3modal';
import providerOptions from '../utils/Web3ProviderOptions';

const Header = () => {
  const handleClick = async () => {
    try {
      const web3Modal = new Web3Modal({
          providerOptions
      });
      const provider = await web3Modal.connect();
      // await activate(provider);
      // activateBrowserWallet();
      // console.log("account", account)
    } catch(e) {
        console.log(e);
    }
  }

  return (
    <button onClick={handleClick}>Connect wallet</button>
  )
}

export default Header;