using System;
using System.Dynamic;

namespace ElectronicDeviceOOP
{
    public abstract class Device
    {
        private readonly Guid _serialNumber;
        private readonly string _brand;
        private readonly string _model;
        private readonly DeviceType _deviceType;
        private readonly string _color;
        private readonly OsType _osType;

        protected Guid SerialNumber
        {
            get => _serialNumber;
            init => _serialNumber = value;
        }

        protected string Brand
        {
            get => _brand;
            init => _brand = value;
        }

        protected string Model
        {
            get => _model;
            init => _model = value;
        }

        protected DeviceType DeviceType
        {
            get => _deviceType;
            init => _deviceType = value;
        }

        protected string Color
        {
            get => _color;
            init => _color = value;
        }

        protected OsType OsType
        {
            get => _osType;
            init => _osType = value;
        }


        public abstract void Create();
        public abstract void ShowSpecifications(object obj);
    }
}