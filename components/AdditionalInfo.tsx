

export default function AdditionalInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center px-16 py-10 h-[50vh]">
        <div className="flex flex-col gap-3 w-full">
            <h3 className="text-primary  font-bold border-b-2 py-2">PRODUCT DETAIL</h3>
            <ul className="list-disc text-sm pl-4">
                <li>240g whole bean</li>
                <li>Makes 26 cups</li>
                <li>Comes in rescyclable packaging</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-primary  font-bold border-b-2 py-2">ADDITIONAL INFO</h3>
            <ul className="list-disc text-sm pl-4">
                <li>100% natural Arabica speciality coffee</li>
                <li>Freshly roasted and ready to grind</li>
                <li>We recommend whole bean is consumed within 3 months from roasting</li>
                <li>Whole bean is delivered with a minimum of 2 months to consume</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-primary  font-bold border-b-2 py-2">WHY CHOOSE US</h3>
            <p className="text-sm">Developed by world-renowed chef ####, BeanBliss offers a variety of <br /> award-winning speciality coffee, meticulously blended to double the flavour potential in every cup.</p>
        </div>
    </div>
  )
}
