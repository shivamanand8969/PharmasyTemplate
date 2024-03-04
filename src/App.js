import './App.css';
import AppoinmentPage from './Components/AppoinmentPage';
import BlogForPharmacyPage from './Components/BlogForPharmacyPage';
import BluePage from './Components/BluePage';
import FeaturePage from './Components/FeaturePage';
import FooterPage from './Components/FooterPage';
import FormBox from './Components/FormBox';
import Header from './Components/Header';
import ImagePage from './Components/ImagePage';
import ReviewPage from './Components/ReviewPage';

function App() {
  return (
    <>
    <Header/>
    <FeaturePage/>
    <BluePage/>
    <BlogForPharmacyPage/>
    <ReviewPage/>
    <ImagePage/>
    <FormBox/>
    <AppoinmentPage/>
    <FooterPage/>
    </>
  );
}

export default App;
