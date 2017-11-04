



  $( "#formPC" ).validate({
    rules: {
      nome: {
        required: true

      },
      email: {
        required: true,
        email: true
      }
    }
  });

  $( "#formCel" ).validate({
    rules: {
      nome: {
        required: true

      },
      email: {
        required: true,
        email: true
      }
    }
  });
