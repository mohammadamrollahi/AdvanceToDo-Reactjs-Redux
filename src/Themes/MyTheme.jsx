import {createMuiTheme} from "@material-ui/core/styles";
import { purple } from '@material-ui/core/colors';
const darkTheme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#3c99dc",
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#000',
      },
    },
  });
export default  darkTheme
// export const lightTheme=createMuiTheme({
//     palette: {
//         primary: {
//             main: '#fff',
//         },

//     }
// })
