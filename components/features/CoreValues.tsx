import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="section-padding">
      <div className="text-center mb-12">
        <h2 className="heading-2">
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
          <CardContent className="p-0">
            <Heart className="h-16 w-16 text-green-100 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Love</h3>
            <p className="text-gray-600 leading-relaxed">
              We love God with all our hearts and extend that love to every person we meet, 
              creating a community where everyone feels valued and welcomed.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
          <CardContent className="p-0">
            <Users className="h-16 w-16 text-green-100 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of authentic relationships and meaningful connections 
              that help us grow together in faith and life.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
          <CardContent className="p-0">
            <BookOpen className="h-16 w-16 text-green-100 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to growing in our understanding of God's Word and 
              helping others discover their purpose and potential in Christ.
            </p>
          </CardContent>
        </Card>
      </div>
  </section>
  )
}

export default CoreValues
