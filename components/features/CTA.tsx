
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="section-padding bg-gray-50">
    <div className="text-center">
      <h2 className="heading-2">Ready to Take Your Next Step?</h2>
      <div className="w-24 h-1 my-4 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
      <p className="body-large max-w-2xl mx-auto mb-8">
        Whether you're new to faith or looking to grow deeper, we're here to 
        walk alongside you on your spiritual journey.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" asChild size="lg" className="bg-green-100 text-white hover:bg-green-100/80">
          <Link href="/contact">Get Connected</Link>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default CTA