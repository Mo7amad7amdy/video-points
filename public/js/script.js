$(document).ready(function(){
    // start index.html script
    $('form[name="create_biolink_link"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_text"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_soundcloud"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_youtube"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_twitch"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_vimeo"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_spotify"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_tiktok"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    $('form[name="create_biolink_mail"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "link-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    /* Fade out refresh */
                    fade_out_redirect({ url: data.details.url, full: true });
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let update_main_url = () => {
        let new_url = $('form[name="update_biolink"] input[name="url"], form[name="update_link"] input[name="url"]').val();
        /* Title */
        $("#link_url").text(new_url);
        /* Change link and copy link */
        let new_full_url = null;
        if ($('select[name="domain_id"]').length) {
            let link_base = $('select[name="domain_id"]').find(":selected").text();
            new_full_url = `${link_base}${new_url}`;
        } else {
            new_full_url = `${$('input[name="link_base"]').val()}${new_url}`;
        }
        $("#link_full_url").text(new_full_url).attr("href", new_full_url);
        $("#link_full_url_copy").attr("data-clipboard-text", new_full_url);
        /* Refresh iframe */
        if ($("#biolink_preview_iframe").length) {
            let biolink_preview_iframe = $("#biolink_preview_iframe");
            let biolink_preview_iframe_new_full_url = `${biolink_preview_iframe.data("url-prepend")}${new_url}${biolink_preview_iframe.data("url-append")}`;
            biolink_preview_iframe.attr("src", biolink_preview_iframe_new_full_url);
        }
    };
    /* Link url dynamic change handler */
    $('form[name="update_link"]').on("submit", update_main_url);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Settings Tab */
    /* Initiate the color picker */
    let pickr_options = {
        comparison: false,
        components: { preview: true, opacity: true, hue: true, comparison: false, interaction: { hex: true, rgba: false, hsla: false, hsva: false, cmyk: false, input: true, clear: false, save: true } },
    };
    /* Helper to generate avatar preview */
    function generate_image_preview(input) {
        console.log(input.files);
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                $("#image_file_preview").attr("src", event.target.result);
                $("#biolink_preview_iframe").contents().find("#image").attr("src", event.target.result).show();
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#image_file_input").on("change", (event) => {
        $("#image_file_status").show();
        $('[data-toggle="tooltip"]').tooltip();
        $('input[name="image_delete"]').val(false);
        generate_image_preview(event.currentTarget);
    });
    $("#image_file_remove").on("click", () => {
        let default_src = $("#image_file_preview").attr("data-default-src");
        let empty_src = $("#image_file_preview").attr("data-empty-src");
        /* Check if new avatar is selected and act accordingly */
        if ($("#image_file_input").get(0).files.length > 0) {
            /* Check if we had a non default image previously */
            if (default_src == empty_src) {
                $("#image_file_preview").attr("src", empty_src);
                $("#biolink_preview_iframe").contents().find("#image").hide();
                $("#image_file_status").hide();
            } else {
                $("#image_file_preview").attr("src", default_src);
                $("#image_file_input").replaceWith($("#image_file_input").val("").clone(true));
            }
        } else {
            $("#image_file_preview").attr("src", empty_src);
            $("#biolink_preview_iframe").contents().find("#image").hide();
            $('input[name="image_delete"]').val(true);
            $("#image_file_status").hide();
        }
    });
    /* Preview handlers */
    $("#settings_title").on("change paste keyup", (event) => {
        $("#biolink_preview_iframe").contents().find("#title").text($(event.currentTarget).val());
    });
    $("#settings_description").on("change paste keyup", (event) => {
        $("#biolink_preview_iframe").contents().find("#description").text($(event.currentTarget).val());
    });
    /* Text Color Handler */
    let settings_text_color_pickr = Pickr.create({
        el: "#settings_text_color_pickr",
        default: $("#settings_text_color").val(),
        ...{ comparison: false, components: { preview: true, opacity: false, hue: true, comparison: false, interaction: { hex: true, rgba: false, hsla: false, hsva: false, cmyk: false, input: true, clear: false, save: true } } },
    });
    settings_text_color_pickr.on("change", (hsva) => {
        $("#settings_text_color").val(hsva.toHEXA().toString());
        $("#biolink_preview_iframe").contents().find("header").css("color", hsva.toHEXA().toString());
        $("#biolink_preview_iframe").contents().find("#branding").css("color", hsva.toHEXA().toString());
    });
    /* Socials Color Handler */
    let settings_socials_color_pickr = Pickr.create({ el: "#settings_socials_color_pickr", default: $("#settings_socials_color").val(), ...pickr_options });
    settings_socials_color_pickr.on("change", (hsva) => {
        $("#settings_socials_color").val(hsva.toHEXA().toString());
        $("#biolink_preview_iframe").contents().find("#socials a svg").css("color", hsva.toHEXA().toString());
    });
    /* Background Type Handler */
    let background_type_handler = () => {
        let type = $("#settings_background_type").find(":selected").val();
        /* Show only the active background type */
        $(`div[id="background_type_${type}"]`).show();
        $(`div[id="background_type_${type}"]`).find('[name^="background"]').removeAttr("disabled");
        /* Disable the other possible types so they dont get submitted */
        let background_type_containers = $(`div[id^="background_type_"]:not(div[id$="_${type}"])`);
        background_type_containers.hide();
        background_type_containers.find('[name^="background"]').attr("disabled", "disabled");
    };
    background_type_handler();
    $("#settings_background_type").on("change", background_type_handler);
    /* Preset Baclground Preview */
    $('#background_type_preset input[name="background"]').on("change", (event) => {
        let value = $(event.currentTarget).val();
        $("#biolink_preview_iframe").contents().find("body").attr("class", `link-body link-body-background-${value}`).attr("style", "");
    });
    /* Gradient Background */
    let settings_background_type_gradient_color_one_pickr = Pickr.create({
        el: "#settings_background_type_gradient_color_one_pickr",
        default: $("#settings_background_type_gradient_color_one").val(),
        ...pickr_options,
    });
    settings_background_type_gradient_color_one_pickr.on("change", (hsva) => {
        $("#settings_background_type_gradient_color_one").val(hsva.toHEXA().toString());
        let color_one = $("#settings_background_type_gradient_color_one").val();
        let color_two = $("#settings_background_type_gradient_color_two").val();
        $("#biolink_preview_iframe").contents().find("body").attr("class", "link-body").attr("style", `background-image: linear-gradient(135deg, ${color_one}10%, ${color_two}100%);`);
    });
    let settings_background_type_gradient_color_two_pickr = Pickr.create({ el: "#settings_background_type_gradient_color_two_pickr", default: $("#settings_background_type_gradient_color_two").val(), ...pickr_options });
    settings_background_type_gradient_color_two_pickr.on("change", (hsva) => {
        $("#settings_background_type_gradient_color_two").val(hsva.toHEXA().toString());
        let color_one = $("#settings_background_type_gradient_color_one").val();
        let color_two = $("#settings_background_type_gradient_color_two").val();
        $("#biolink_preview_iframe").contents().find("body").attr("class", "link-body").attr("style", `background-image: linear-gradient(135deg, ${color_one}10%, ${color_two}100%);`);
    });
    /* Color Background */
    let settings_background_type_color_pickr = Pickr.create({ el: "#settings_background_type_color_pickr", default: $("#settings_background_type_color").val(), ...pickr_options });
    settings_background_type_color_pickr.on("change", (hsva) => {
        $("#settings_background_type_color").val(hsva.toHEXA().toString());
        $("#biolink_preview_iframe").contents().find("body").attr("class", "link-body").attr("style", `background: ${hsva.toHEXA().toString()};`);
    });
    /* Image Background */
    function generate_background_preview(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
                $("#background_type_image_preview").attr("src", event.target.result);
                $("#biolink_preview_iframe").contents().find("body").attr("class", "link-body").attr("style", `background: url(${event.target.result});`);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#background_type_image_input").on("change", (event) => {
        $("#background_type_image_status").show();
        generate_background_preview(event.currentTarget);
    });
    $("#background_type_image_remove").on("click", () => {
        $("#background_type_image_preview").attr("src", $("#background_type_image_preview").attr("data-default-src"));
        $("#biolink_preview_iframe")
            .contents()
            .find("body")
            .attr("class", "link-body")
            .attr("style", `background: url(${$("#background_type_image_preview").attr("data-default-src")});`);
        $("#background_type_image_input").replaceWith($("#background_type_image_input").val("").clone(true));
        $("#background_type_image_status").hide();
    });
    /* Display branding switcher */
    $("#display_branding").on("change", (event) => {
        if ($(event.currentTarget).is(":checked")) {
            $("#biolink_preview_iframe").contents().find("#branding").show();
        } else {
            $("#biolink_preview_iframe").contents().find("#branding").hide();
        }
    });
    /* Branding change */
    $("#branding_name").on("change paste keyup", (event) => {
        $("#biolink_preview_iframe").contents().find("#branding").text($(event.currentTarget).val());
    });
    $("#branding_url").on("change paste keyup", (event) => {
        $("#biolink_preview_iframe").contents().find("#branding").attr("src", $(event.currentTarget).val());
    });
    /* Form handling */
    $('form[name="update_biolink"],form[name="update_biolink_"]').on("submit", (event) => {
        let form = $(event.currentTarget)[0];
        let data = new FormData(form);
        let notification_container = $(event.currentTarget).find(".notification-container");
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            processData: false,
            contentType: false,
            cache: false,
            url: "link-ajax",
            data: data,
            success: (data) => {
                display_notifications(data.message, data.status, notification_container);
                notification_container[0].scrollIntoView();
                update_main_url();
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    /* Links tab */
    let sortable = Sortable.create(document.getElementById("links"), {
        animation: 150,
        handle: ".drag",
        onUpdate: (event) => {
            let global_token = $('input[name="global_token"]').val();
            let links = [];
            $("#links > .link").each((i, elm) => {
                let link = { link_id: $(elm).data("link-id"), order: i };
                links.push(link);
            });
            $.ajax({ type: "POST", url: "link-ajax", data: { request_type: "order", links, global_token }, dataType: "json" });
            /* Refresh iframe */
            $("#biolink_preview_iframe").attr("src", $("#biolink_preview_iframe").attr("src"));
        },
    });
    /* Fontawesome icon picker */
    $('[role="iconpicker"]').on("change", (event) => {
        $(event.currentTarget).closest(".form-group").find("input").val(event.icon).trigger("change");
    });
    /* Status change handler for the links */
    $('[id^="biolink_link_is_enabled_"]').on("click", (event) => {
        ajax_call_helper(event, "link-ajax", "is_enabled_toggle", () => {
            let link_id = $(event.currentTarget).data("row-id");
            $(event.currentTarget).closest(".link").toggleClass("custom-row-inactive");
            /* Refresh iframe */
            $("#biolink_preview_iframe").attr("src", $("#biolink_preview_iframe").attr("src"));
        });
    });
    /* Duplicate link handler for the links */
    $('[data-duplicate="true"]').on("click", (event) => {
        ajax_call_helper(event, "link-ajax", "duplicate", (event, data) => {
            fade_out_redirect({ url: data.details.url, full: true });
        });
    });
    /* When an expanding happens for a link settings */
    $('[id^="link_expanded_content"]').on("show.bs.collapse", (event) => {
        let link_subtype = $(event.currentTarget).data("link-subtype");
        let link_id = $(event.currentTarget.querySelector('input[name="link_id"]')).val();
        let biolink_link = $("#biolink_preview_iframe").contents().find(`[data-link-id="${link_id}"]`);
        switch (link_subtype) {
            case "text":
                let title_text_color_pickr_element = event.currentTarget.querySelector(".title_text_color_pickr");
                let description_text_color_pickr_element = event.currentTarget.querySelector(".description_text_color_pickr");
                if (title_text_color_pickr_element) {
                    let color_input = event.currentTarget.querySelector('input[name="title_text_color"]');
                    /* Color Handler */
                    let color_pickr = Pickr.create({ el: title_text_color_pickr_element, default: $(color_input).val(), ...pickr_options });
                    color_pickr.off().on("change", (hsva) => {
                        $(color_input).val(hsva.toHEXA().toString());
                        biolink_link.find("h2").css("color", hsva.toHEXA().toString());
                    });
                }
                if (description_text_color_pickr_element) {
                    let color_input = event.currentTarget.querySelector('input[name="description_text_color"]');
                    /* Color Handler */
                    let color_pickr = Pickr.create({ el: description_text_color_pickr_element, default: $(color_input).val(), ...pickr_options });
                    color_pickr.off().on("change", (hsva) => {
                        $(color_input).val(hsva.toHEXA().toString());
                        biolink_link.find("p").css("color", hsva.toHEXA().toString());
                    });
                }
                break;
            default:
                biolink_link = biolink_link.find("a");
                let text_color_pickr_element = event.currentTarget.querySelector(".text_color_pickr");
                let background_color_pickr_element = event.currentTarget.querySelector(".background_color_pickr");
                /* Schedule Handler */
                let schedule_handler = () => {
                    if ($(event.currentTarget.querySelector('input[name="schedule"]')).is(":checked")) {
                        $(event.currentTarget.querySelector(".schedule_container")).show();
                    } else {
                        $(event.currentTarget.querySelector(".schedule_container")).hide();
                    }
                };
                $(event.currentTarget.querySelector('input[name="schedule"]')).off().on("change", schedule_handler);
                schedule_handler();
                /* Initiate the datepicker */
                $.fn.datepicker.language["altum"] = {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    dateFormat: "mm\/dd\/yyyy",
                    timeFormat: "hh:ii aa",
                    firstDay: 1,
                };
                $('[name="start_date"],[name="end_date"]').datepicker({
                    classes: "datepicker-modal",
                    language: "altum",
                    dateFormat: "yyyy-mm-dd",
                    timeFormat: "hh:ii:00",
                    autoClose: true,
                    timepicker: true,
                    toggleSelected: false,
                    minDate: new Date(),
                });
                let outside_event = event;
                $(event.currentTarget.querySelector('input[name="name"]'))
                .off()
                .on("change paste keyup", (event) => {
                    biolink_link.text($(event.currentTarget).val());
                    $(outside_event.currentTarget.querySelector('input[name="icon"]')).trigger("change");
                });
                $(event.currentTarget.querySelector('input[name="icon"]'))
                .off()
                .on("change paste keyup", (event) => {
                    let icon = $(event.currentTarget).val();
                    if (!icon) {
                        biolink_link.find("svg").remove();
                    } else {
                        biolink_link.find("svg,i").remove();
                        biolink_link.prepend(`<i class="${icon}mr-1"></i>`);
                    }
                });
                if (text_color_pickr_element) {
                    let color_input = event.currentTarget.querySelector('input[name="text_color"]');
                    /* Background Color Handler */
                    let color_pickr = Pickr.create({ el: text_color_pickr_element, default: $(color_input).val(), ...pickr_options });
                    color_pickr.off().on("change", (hsva) => {
                        $(color_input).val(hsva.toHEXA().toString());
                        biolink_link.css("color", hsva.toHEXA().toString());
                    });
                }
                if (background_color_pickr_element) {
                    let color_input = event.currentTarget.querySelector('input[name="background_color"]');
                    /* Background Color Handler */
                    let color_pickr = Pickr.create({ el: background_color_pickr_element, default: $(color_input).val(), ...pickr_options });
                    color_pickr.off().on("change", (hsva) => {
                        $(color_input).val(hsva.toHEXA().toString());
                        /* Change the background or the border color */
                        if (biolink_link.css("background-color") != "rgba(0, 0, 0, 0)") {
                            biolink_link.css("background-color", hsva.toHEXA().toString());
                        } else {
                            biolink_link.css("border-color", hsva.toHEXA().toString());
                        }
                    });
                }
                $(event.currentTarget.querySelector('input[name="outline"]'))
                .off()
                .on("change", (event) => {
                    let outline = $(event.currentTarget).is(":checked");
                    if (outline) {
                        /* From background color to border */
                        let background_color = biolink_link.css("background-color");
                        biolink_link.css("background-color", "transparent");
                        biolink_link.css("border", `.1rem solid ${background_color}`);
                    } else {
                        /* From border to background color */
                        let border_color = biolink_link.css("border-color");
                        biolink_link.css("background-color", border_color);
                        biolink_link.css("border", "none");
                    }
                });
                $(event.currentTarget.querySelector('select[name="border_radius"]'))
                .off()
                .on("change", (event) => {
                    let border_radius = $(event.currentTarget).find(":selected").val();
                    switch (border_radius) {
                        case "straight":
                            biolink_link.removeClass("link-btn-round link-btn-rounded");
                            break;
                        case "round":
                            biolink_link.removeClass("link-btn-rounded").addClass("link-btn-round");
                            break;
                        case "rounded":
                            biolink_link.removeClass("link-btn-round").addClass("link-btn-rounded");
                            break;
                    }
                });
                let current_animation = $(event.currentTarget.querySelector('select[name="animation"]')).val();
                $(event.currentTarget.querySelector('select[name="animation"]'))
                .off()
                .on("change", (event) => {
                    let animation = $(event.currentTarget).find(":selected").val();
                    switch (animation) {
                        case "false":
                            biolink_link.removeClass(`animated ${current_animation}`);
                            current_animation = false;
                            break;
                        default:
                            biolink_link.removeClass(`animated ${current_animation}`).addClass(`animated ${animation}`);
                            current_animation = animation;
                            break;
                    }
                });
        }
    });

    let clipboard = new ClipboardJS("[data-clipboard-text]");
    /* Delete handler for the notification */
    $("[data-delete]").on("click", (event) => {
        let message = $(event.currentTarget).attr("data-delete");
        if (!confirm(message)) return false;
        /* Continue with the deletion */
        ajax_call_helper(event, "link-ajax", "delete", (event, data) => {
            fade_out_redirect({ url: data.details.url, full: true });
        });
    });

    $("[data-choose-theme-style]").on("click", (event) => {
        set_cookie("theme_style", $(event.currentTarget).data("choose-theme-style"), 30);
        location.reload();
        event.preventDefault();
    });
    // end index.html script

    // start home.html script
    $('form[name="create_project"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "project-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    $("#create_project").modal("hide");
                    $('form[name="create_project"] input').val("");
                    redirect(data.details.url, true);
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#project_update").on("show.bs.modal", (event) => {
        let project_id = $(event.relatedTarget).data("project-id");
        let name = $(event.relatedTarget).data("name");
        $(event.currentTarget).find('input[name="project_id"]').val(project_id);
        $(event.currentTarget).find('input[name="name"]').val(name);
    });
    $('form[name="project_update"]').on("submit", (event) => {
        $.ajax({
            type: "POST",
            url: "project-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                if (data.status == "error") {
                    let notification_container = $(event.currentTarget).find(".notification-container");
                    notification_container.html("");
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    $("#project_update").modal("hide");
                    $('form[name="project_update"] input').val("");
                    redirect(`dashboard`);
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#project_delete").on("show.bs.modal", (event) => {
        let project_id = $(event.relatedTarget).data("project-id");
        $(event.currentTarget).find('input[name="project_id"]').val(project_id);
    });
    $('form[name="project_delete"]').on("submit", (event) => {
        let project_id = $(event.currentTarget).find('input[name="project_id"]').val();
        $.ajax({
            type: "POST",
            url: "project-ajax",
            data: $(event.currentTarget).serialize(),
            success: (data) => {
                let notification_container = $(event.currentTarget).find(".notification-container");
                notification_container.html("");
                if (data.status == "error") {
                    display_notifications(data.message, "error", notification_container);
                } else if (data.status == "success") {
                    $(event.currentTarget).find('input[name="project_id"]').val("");
                    display_notifications(data.message, "success", notification_container);
                    setTimeout(() => {
                        $("#project_delete").modal("hide");
                        redirect("dashboard");
                    }, 1000);
                }
            },
            dataType: "json",
        });
        event.preventDefault();
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("[data-choose-theme-style]").on("click", (event) => {
        set_cookie("theme_style", $(event.currentTarget).data("choose-theme-style"), 30);
        location.reload();
        event.preventDefault();
    });
    // end home.html script

    // start statistics.html script
    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let clipboard = new ClipboardJS("[data-clipboard-text]");
    $("[data-delete]").on("click", (event) => {
        let message = $(event.currentTarget).attr("data-delete");
        if (!confirm(message)) return false;
        ajax_call_helper(event, "link-ajax", "delete", (event, data) => {
            fade_out_redirect({ url: data.details.url, full: true });
        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("[data-choose-theme-style]").on("click", (event) => {
        set_cookie("theme_style", $(event.currentTarget).data("choose-theme-style"), 30);
        location.reload();
        event.preventDefault();
    });
    // end statistics.html script
});