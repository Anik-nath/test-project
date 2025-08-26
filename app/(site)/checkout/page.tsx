// export const dynamic = 'force-dynamic'
// export const runtime = 'nodejs' // Add this line

// import SubscriptionCheckout from "./_components/subscription-checkout";
// import { getServerCart } from "@/lib/actions/cart-cookie";
// import CourseCheckout from "./_components/course-checkout";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";

// interface CheckOutPageProps {
//   searchParams: {
//     error?: string;
//     success?: string;
//     trxID?: string;
//     amount?: string;
//   };
// }

// const CheckOutPage = async ({ searchParams }: CheckOutPageProps) => {
//   console.log("Checkout page loaded on server");
//   // get data from cookies
//   const cartData = await getServerCart();

//   // if (cartData.items.length === 0) {
//   //   redirect("/");
//   // }
//   if (cartData.items.length === 0) {
//     return (
//       <div className="app-container py-20 text-center min-h-[60vh] flex items-center justify-center">
//         <div className="max-w-3xl border border-dashed border-gray-300 mx-auto p-4 md:p-16 rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">আপনার কার্ট খালি</h2>
//           <p className="mb-4">
//             আপনার কার্টে কোন আইটেম নেই। অনুগ্রহ করে কিছু যোগ করুন।
//           </p>
//           <div className="mt-6 flex justify-center md:flex-row flex-col items-center gap-3">
//             <Link href="/prime">
//               <Button variant="primary" className="flex flex-wrap flex-row">
//                 <ArrowLeft className="mr-2 w-4 h-4" />
//                 প্রাইম প্ল্যান দেখুন
//               </Button>
//             </Link>
//             <Link href="/courses">
//               <Button variant="outline" className="flex flex-wrap flex-row">
//                 <ArrowLeft className="mr-2 w-4 h-4" />
//                 কোর্স সমূহ দেখুন
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Extract error and success messages from URL parameters
//   const errorMessage = searchParams.error;
//   const transactionId = searchParams.trxID;
//   const amount = searchParams.amount;

//   const isPaymentSuccessful = transactionId && amount;

//   if (cartData?.type === "SUBSCRIPTION") {
//     return (
//       <div>
//         <SubscriptionCheckout
//           cartData={cartData}
//           errorMessage={errorMessage}
//           isPaymentSuccessful={isPaymentSuccessful}
//           transactionId={transactionId}
//           amount={amount}
//         />
//       </div>
//     );
//   }

//   if (cartData?.type === "COURSE") {
//     return (
//       <div>
//         <CourseCheckout
//           cartData={cartData}
//           errorMessage={errorMessage}
//           isPaymentSuccessful={isPaymentSuccessful}
//           transactionId={transactionId}
//           amount={amount}
//         />
//       </div>
//     );
//   }
// };

// export default CheckOutPage;

import React from "react";

export default function page() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        eum unde corrupti officiis eligendi dolores repellat nemo veritatis eius
        ad, delectus, quaerat hic temporibus? Magnam blanditiis sapiente
        voluptate nulla eaque molestias autem placeat nesciunt quisquam facilis
        veniam, quos alias rerum amet enim totam reprehenderit! Harum libero eum
        deleniti ab praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        eum unde corrupti officiis eligendi dolores repellat nemo veritatis eius
        ad, delectus, quaerat hic temporibus? Magnam blanditiis sapiente
        voluptate nulla eaque molestias autem placeat nesciunt quisquam facilis
        veniam, quos alias rerum amet enim totam reprehenderit! Harum libero eum
        deleniti ab praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        eum unde corrupti officiis eligendi dolores repellat nemo veritatis eius
        ad, delectus, quaerat hic temporibus? Magnam blanditiis sapiente
        voluptate nulla eaque molestias autem placeat nesciunt quisquam facilis
        veniam, quos alias rerum amet enim totam reprehenderit! Harum libero eum
        deleniti ab praesentium.
      </p>
    </div>
  );
}
