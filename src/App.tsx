import  { useState, useEffect } from "react";
import "./App.css";
import ProductTableContainer from './container/ProductTableContainer'
import ProductSummaryContainer from './container/ProductSummaryContainer'
import { fetchData } from './actions/actions';
import { ApplicationState } from './utills/types'
import BannerLogoContainer from './container/BannerLogoContainer'
import ProductGraphContainer from './container/ProductGraphContainer'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [isloading, setIsLoading] = useState(false)
  const data = useSelector((state: ApplicationState) => state.data);
  const error = useSelector((state: ApplicationState) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchData());
    setIsLoading(false)

  }, [dispatch])
  if (isloading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="product-dashboard">
      <BannerLogoContainer />
      {data && data.length !== 0 && (
        <div className="product-container">
          <ProductSummaryContainer data={data} />
          <div className="sales-column-trend">
            <ProductGraphContainer data={data} />
            <ProductTableContainer data={data} />
          </div>
        </div>
      )}
    </div>

  );
}



export default App;
