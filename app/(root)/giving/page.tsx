import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Church, Smartphone, Building } from 'lucide-react';
import GivingForm from '@/components/forms/GivingForm';
import { whyWeGive } from '@/constants';

const Giving = () => {
  return (
    <div className="pt-16">
      <section className="section-padding bg-green-100 text-primary-foreground">
        <div className="container-custom text-center">
          <h1 className="heading-2 mb-6">Generous Giving</h1>
          <p className="text-large max-w-3xl mx-auto text-primary-foreground/90">
            Your generosity helps us fulfill our mission to share God's love, support our 
            community, and make a lasting impact both locally and globally.
          </p>
        </div>
      </section>

      <section className="section-padding">
          <div className="md:text-center text-start mb-16">
            <h2 className="heading-2 mb-4">Why We Give</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWeGive.map((item, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-8">
                  <item.icon className="h-12 w-12 text-green-100 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
          </div>
      </section>

      <section id="giving-form" className="py-16 bg-white">
          <div className="md:text-center text-start mb-12">
            <h2 className="heading-2 mb-4">
              Give Online
            </h2>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-green-100" />
              Make a Donation
            </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
           <GivingForm />
            </CardContent>
          </Card>
      </section>

      <section className="section-padding">
          <div className="md:text-center text-start mb-12">
            <h2 className="heading-2 mb-4">Other Ways to Give</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Church className="h-5 w-5 text-green-100" />
                  During Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Give during our worship services using the offering boxes or 
                  during the offering time.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-100" />
                  Mobile Money
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Send directly via M-Pesa, Airtel Money, or other mobile money 
                  services to our church account.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-100" />
                  Bank Deposit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make a direct deposit to our church account at Kenya Commercial Bank. 
                  Contact us for account details.
                </p>
              </CardContent>
            </Card>
          </div>
      </section>
    </div>
  )
}

export default Giving