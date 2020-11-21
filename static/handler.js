var url = 'http://169.254.169.254/latest/meta-data/ami-id';
$.get(url, function(data){
    console.log(data);
    $('#ami-id').text(data);
    /*$('.loader').css('display','none');
    $('.weatherInfo').css('display','block');

    $('#country').text(getCountryName(data['sys']['country']));
    $('#area').text(data['name']);
    $('#temperature').text(data['main']['temp'] + " °C");
    $('#description').text(data['weather'][0]['description']);
    $('#icon').attr('src', data['weather'][0]['icon'])*/
});