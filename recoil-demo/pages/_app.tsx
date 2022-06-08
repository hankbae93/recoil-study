import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const queryClientRef = useRef<QueryClient>();
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		});
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default MyApp;
