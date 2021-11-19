using System;

namespace ElectronicDeviceOOP
{
    public class Smartphone : Device
    {
        public override void Create()
        {
            var smartphone = new Smartphone
            {
                Brand = "Samsung",
                Model = "Galaxy S10",
                Color = "Black",
                DeviceType = DeviceType.Smartphone,
                OsType = OsType.Android,
                SerialNumber = Guid.NewGuid() 
            };
            ShowSpecifications(smartphone);
            Call();
            SendMessage();
            TakePicture();
        }

        public override void ShowSpecifications(object obj)
        {
            Console.WriteLine("Smartphone Specifications");
            Console.WriteLine("Brand: {0}", ((Smartphone)obj).Brand);
            Console.WriteLine("Model: {0}", ((Smartphone)obj).Model);
            Console.WriteLine("Color: {0}", ((Smartphone)obj).Color);
            Console.WriteLine("Device Type: {0}", ((Smartphone)obj).DeviceType);
            Console.WriteLine("OS Type: {0}", ((Smartphone)obj).OsType);
            Console.WriteLine("Serial Number: {0}", ((Smartphone)obj).SerialNumber);
        }

        private static void Call()
        {
            Console.WriteLine("Calling");
        }

        private static void SendMessage()
        {
            Console.WriteLine("Sending Message");
        }

        private static void TakePicture()
        {
            Console.WriteLine("Taking Picture");
        }
    }
}