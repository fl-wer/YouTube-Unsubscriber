unsubscribe();

var unsubscribedCounter = 0;
function unsubscribe ()
{    
    if (document.querySelector('.ytd-subscribe-button-renderer') == null)
    {
        console.log("No channels left? Trying again...");
        sleep(2000).then(() => { unsubscribe(); });
    }
    else
    {
        unsubButton = document.querySelector('.ytd-subscribe-button-renderer');
        unsubButton.click();

        setTimeout(function ()
        {
            document.getElementById("confirm-button").click();
            unsubscribedCounter += 1;

            console.log("Unsubscribed: " + unsubscribedCounter);
            setTimeout(function ()
            {
                unsubButton = document.querySelector("ytd-channel-renderer");
                unsubButton.parentNode.removeChild(unsubButton);

                unsubscribe();
            }, 250);
        }, 250);
    }
}

function sleep(time)
    { return new Promise((resolve) => setTimeout(resolve, time)); }