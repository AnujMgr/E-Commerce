import Footer from "./Footer";
import Navbar from "./navbar";

export { Footer, Navbar };

// import React from "react";

// import Navbar from "./components/navbar/navbar";
// import Footer from "./components/Footer/footer";
// import { CategoriesProvider } from "../ContextApi/CategoriesProvider";

// const BaseLayout = props => {
//   return (
//     <CategoriesProvider>
//       <Navbar />
//       {props.children}
//       <Footer />
//     </CategoriesProvider>
//   );
// };
// // class BaseLayout extends Component {
// //   render() {
// //     const { categories, ItemNumber } = this.props;
// //     return (
// //       <CategoriesProvider>
// //         <Navbar categories={categories} ItemNumber={ItemNumber} />
// //         {this.props.children}
// //         <Footer />
// //       </CategoriesProvider>
// //     );
// //   }
// export default React.memo(BaseLayout);
