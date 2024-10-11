import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardPerson from "./components/CardPerson";
import FormPerson from "./components/FormPerson";

const queryClient = new QueryClient()

function HomeReactQuery() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>Home React Query</h1><hr />
            <div className="row">
                <div className="col-md-5">
                    <FormPerson />
                </div>
                <div className="col-md-7">
                    <CardPerson />
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default HomeReactQuery