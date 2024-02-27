import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import MainContainer from "./components/MainContainer";
import { ThemeProvider } from "./components/ThemeProvider";
import i18n from "./lib/18n";
import { router } from "./lib/router";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<ThemeProvider defaultTheme="system">
				<MainContainer>
					<RouterProvider router={router} />
				</MainContainer>
			</ThemeProvider>
		</I18nextProvider>
	</React.StrictMode>,
);
