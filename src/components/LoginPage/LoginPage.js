// import React from "react";
// import "./LoginPage.css";
// import { Box, Input } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { FcGoogle } from "react-icons/fc";
// import { IoLogoLinkedin } from "react-icons/io";

// export default function LoginPage() {
//   return (
//     <Box
//       className="login-container"
//       bg="#eaeaec"
//       w="100%"
//       h="100vh"
//       p={4}
//       color="black"
//     >
//       <Tabs variant="unstyled" align="center" className="navigation-container">
//         <div>Logo</div>
//         <TabList mb="40px" m="40px">
//           <Tab>Login</Tab>
//           <Tab>Signup</Tab>
//         </TabList>

//         <TabPanels>
//           <TabPanel>
//             <label>Email</label>

//           <Input w="100%" placeholder="Email" my="10px" />
//           <label>Password</label>
//           <Input w="100%" placeholder="Password" my="10px"/>
//           <div>
//           <Button
//                 w="100%"
//                 my="5px"
//                 pr="60px"
//                 pl="60px"
//                 colorScheme="teal"
//                 size="lg"
//                 bg="black"

//             >
//               Login
//             </Button>
//             </div>
//             <div>
//               <Button
//                 leftIcon={<FcGoogle />}
//                 w="100%"
//                 my="5px"
//                 pr="60px"
//                 pl="60px"
//                 bg="alphaBlack"
//                 border="solid gray 1px"
//                 size="lg"
//                 fontWeight="light"
//                 borderRadius="8px"
//               >
//                Signin with Google
//               </Button>
//             </div>
//             <div>
//               <Button
//                 leftIcon={<IoLogoLinkedin />}
//                 w="100%"
//                 my="5px"
//                 pr="60px"
//                 pl="60px"
//                 bg="alphaBlack"
//                 border="solid gray 1px"
//                 size="lg"
//                 mb = "20px"
//                 fontWeight="light"
//                 borderRadius="8px"
//               >
//                 Sign in with Linkedin
//               </Button>
//             </div>
//             <div style={{ color:"gray"}}>Forgot password? <strong style={{color:"black"}}>click here</strong></div>
//           </TabPanel>

//           <TabPanel>
//             <div>
//             <Input w="100%" placeholder="Email" my="10px" />
//             </div>

//             <Button
//               w="100%"
//               my="5px"
//               pr="60px"
//               pl="60px"
//               colorScheme="white"
//               size="lg"
//               bg="black"
//               borderRadius="8px"

//             >
//               Next
//             </Button>
//             <div style={{margin:"5px", color:"gray"}}>or</div>
//             <div>
//               <Button
//                 leftIcon={<FcGoogle />}
//                 w="100%"
//                 my="5px"
//                 pr="60px"
//                 pl="60px"
//                 bg="alphaBlack"
//                 border="solid gray 1px"
//                 size="lg"
//                 fontWeight="light"
//                 borderRadius="8px"
//               >
//                Signin with Google
//               </Button>
//             </div>
//             <div>
//               <Button
//                 leftIcon={<IoLogoLinkedin />}
//                 w="100%"
//                 my="5px"
//                 pr="60px"
//                 pl="60px"
//                 bg="alphaBlack"
//                 border="solid gray 1px"
//                 size="lg"
//                 mb = "20px"
//                 fontWeight="light"
//                 borderRadius="8px"
//               >
//                 Sign in with Linkedin
//               </Button>
//             </div>
//             <div style={{ color:"gray"}}>Already have an account? <strong style={{color:"black"}}>Log in here</strong></div>
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </Box>
//   );
// }

import React from "react";
import "./LoginPage.css";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoLinkedin } from "react-icons/io";
// eslint-disable-next-line
import {  FormControl,  FormLabel,  FormErrorMessage,  FormHelperText,} from "@chakra-ui/react";

export default function LoginPage({toggleLogin}) {
  return (
    <Box
      className="login-container"
      bg="#eaeaec"
      w="100%"
      h="100vh"
      p={4}
      color="black"
    >
      <Tabs variant="unstyled" align="center" className="navigation-container">
        <div>Logo</div>
        <TabList mb="40px" m="40px">
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <div>
              <Button
              onClick = {toggleLogin}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                colorScheme="teal"
                size="lg"
                bg="black"
              >
                Login
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<FcGoogle />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                fontWeight="light"
                borderRadius="8px"
              >
                Signin with Google
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<IoLogoLinkedin />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                mb="20px"
                fontWeight="light"
                borderRadius="8px"
              >
                Sign in with Linkedin
              </Button>
            </div>
            <div style={{ color: "gray" }}>
              Forgot password?{" "}
              <strong style={{ color: "black" }}>click here</strong>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            </div>

            <Button
              w="100%"
              my="5px"
              pr="60px"
              pl="60px"
              colorScheme="white"
              size="lg"
              bg="black"
              borderRadius="8px"
            >
              Next
            </Button>
            <div style={{ margin: "5px", color: "gray" }}>or</div>
            <div>
              <Button
                leftIcon={<FcGoogle />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                fontWeight="light"
                borderRadius="8px"
              >
                Signin with Google
              </Button>
            </div>
            <div>
              <Button
                leftIcon={<IoLogoLinkedin />}
                w="100%"
                my="5px"
                pr="60px"
                pl="60px"
                bg="alphaBlack"
                border="solid gray 1px"
                size="lg"
                mb="20px"
                fontWeight="light"
                borderRadius="8px"
              >
                Sign in with Linkedin
              </Button>
            </div>
            <div style={{ color: "gray" }}>
              Already have an account?{" "}
              <strong style={{ color: "black" }}>Log in here</strong>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
