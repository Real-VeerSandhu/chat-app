export const AuthImagePattern = ({ title, subtitle }) => {

    // default
    // return (
    //   <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    //     <div className="max-w-md text-center">
    //       <div className="grid grid-cols-3 gap-3 mb-8">
    //         {[...Array(9)].map((_, i) => (
    //           <div
    //             key={i}
    //             className={`aspect-square rounded-2xl bg-primary/10 ${
    //               i % 2 === 0 ? "animate-pulse" : ""
    //             }`}
    //           />
    //         ))}
    //       </div>
    //       <h2 className="text-2xl font-bold mb-4">{title}</h2>
    //       <p className="text-base-content/60">{subtitle}</p>
    //     </div>
    //   </div>
    // );

    // circles
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    <div className="max-w-md text-center">
      <div className="relative w-full h-64 mb-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full border-4 ${
              i % 2 === 0 ? "border-primary/20" : "border-secondary/20"
            }`}
            style={{
              animation: `subtlePulse ${6 + i * 1.5}s infinite ease-in-out`,
              width: `${95 - i * 10}%`, // Slightly reduced circle size scaling
              height: `${95 - i * 10}%`,
              margin: "auto",
            }}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-base-content/60">{subtitle}</p>
    </div>
  </div>
      );

    // wave
    // return (
    //     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    //       <div className="max-w-md text-center">
    //         <div className="relative w-full h-64 mb-8 overflow-hidden">
    //           {[...Array(5)].map((_, i) => (
    //             <div
    //               key={i}
    //               className={`absolute w-full h-8 bg-primary/30 rounded-full`}
    //               style={{
    //                 animation: `wave 3s ease-in-out ${i * 0.5}s infinite`,
    //                 bottom: `${i * 20}px`,
    //               }}
    //             />
    //           ))}
    //         </div>
    //         <h2 className="text-2xl font-bold mb-4">{title}</h2>
    //         <p className="text-base-content/60">{subtitle}</p>
    //       </div>
    //     </div>
    //   );


    // particles
    // return (
    //     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
    //       <div className="max-w-md text-center">
    //         <div className="relative w-full h-64 mb-8">
    //           {[...Array(20)].map((_, i) => (
    //             <div
    //               key={i}
    //               className={`absolute w-4 h-4 bg-primary rounded-full`}
    //               style={{
    //                 animation: `float ${i * 0.5}s ease-in-out infinite`,
    //                 top: `${Math.random() * 100}%`,
    //                 left: `${Math.random() * 100}%`,
    //               }}
    //             />
    //           ))}
    //         </div>
    //         <h2 className="text-2xl font-bold mb-4">{title}</h2>
    //         <p className="text-base-content/60">{subtitle}</p>
    //       </div>
    //     </div>
    //   );
  };
  
export default AuthImagePattern;
