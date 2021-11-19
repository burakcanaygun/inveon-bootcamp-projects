using System;

namespace ElectronicDeviceOOP
{
    public class Laptop : Device
    {
        public override void Create()
        {
            var laptop = new Laptop
            {
                Brand = "HP",
                Model = "Pavilion",
                Color = "Black",
                DeviceType = DeviceType.Laptop,
                OsType = OsType.Windows,
                SerialNumber = Guid.NewGuid()
            };
            ShowSpecifications(laptop);
            Start();
            Shutdown();
        }

        public override void ShowSpecifications(object obj)
        {
            Console.WriteLine("Laptop Specifications");
            Console.WriteLine("Brand: {0}", ((Laptop)obj).Brand);
            Console.WriteLine("Model: {0}", ((Laptop)obj).Model);
            Console.WriteLine("Color: {0}", ((Laptop)obj).Color);
            Console.WriteLine("Device Type: {0}", ((Laptop)obj).DeviceType);
            Console.WriteLine("OS Type: {0}", ((Laptop)obj).OsType);
            Console.WriteLine("Serial Number: {0}", ((Laptop)obj).SerialNumber);
        }

        private static void Start()
        {
            Console.WriteLine("Laptop Started");
        }

        private static void Shutdown()
        {
            Console.WriteLine("Laptop Shutdown");
        }
    }
}