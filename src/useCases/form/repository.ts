const data = {
  groups: [
    {
      name: 'DATOS PERSONALES',
      identifier: 'personalData',
      controls: [
        {
          name: 'Cédula',
          identifier: 'identification_number',
          type: 'text',
          validators: [
            {
              name: 'required',
              value: true,
            },
            {
              name: 'min',
              value: 5,
            },
          ],
        },
      ],
    },
  ],
};

export default { data };
