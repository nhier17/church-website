export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="root-container">
            {children}
        </main>
    );
}