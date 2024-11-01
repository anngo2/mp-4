import React from "react";

// Define the RootLayout component, which wraps around all other components
// and provides a structure with <html> and <body> tags.
// The "children" prop represents any nested components within this layout.
export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
    // This destructures "children" from the props, with a type annotation
    // specifying it as a Readonly object with a single React.ReactNode property.
    // This ensures "children" is treated as immutable within this component.

    return (
        // <html> element sets the document language to English.
        <html lang="en">
        {/* <body> wraps the content and renders the "children" */}
        <body>
        {children}
        </body>
        </html>
    );
}
