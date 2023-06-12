import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

const ListingPage = () => {

    const listing = "";;
  
    // if (!listing) {
    //   return (
    //     <ClientOnly>
    //       <EmptyState />
    //     </ClientOnly>
    //   );
    // }
  
    return (
      <ClientOnly>
        <ListingClient
          listing={""}
          reservations={[]}
          currentUser={null}
        />
      </ClientOnly>
    );
}
 
export default ListingPage;